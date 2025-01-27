/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { describe, expect, it, vi } from "vitest";
import { default as createOpenApiRequest } from "./createOpenApiRequest";

describe("createOpenApiRequest", () => {
  it("should construct request correctly", async () => {
    const mockFetch = vi.fn();

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ test: 1 }),
    });

    const request = createOpenApiRequest("https://example.com", mockFetch);
    const mockBody = {
      foo: "bar",
    };

    expect(
      await request("POST", "/foo", mockBody, {
        query: "bar",
        multipleValues: ["value1", "value2"],
      }, {
        "Custom-Header": "Custom-Value",
      }),
    ).toEqual(
      { test: 1 },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://example.com/api/foo?query=bar&multipleValues=value1&multipleValues=value2",
      {
        method: "POST",
        headers: new Headers({
          "Custom-Header": "Custom-Value",
        }),
        body: JSON.stringify(mockBody),
      },
    );
  });

  it("should handle missing protocol", async () => {
    const mockFetch = vi.fn();

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ test: 1 }),
    });

    const request = createOpenApiRequest("example.com", mockFetch);
    expect(
      await request("POST", "/foo"),
    ).toEqual(
      { test: 1 },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://example.com/api/foo",
      {
        method: "POST",
        headers: new Headers(),
      },
    );
  });

  it("should handle http protocol", async () => {
    const mockFetch = vi.fn();

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ test: 1 }),
    });

    const request = createOpenApiRequest("http://example.com", mockFetch);
    expect(
      await request("POST", "/foo"),
    ).toEqual(
      { test: 1 },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://example.com/api/foo",
      {
        method: "POST",
        headers: new Headers(),
      },
    );
  });
});
