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

import type { ObjectTypesFrom, OntologyDefinition } from "@osdk/api";
import type {
  ObjectSetDefinition,
  SearchAroundObjectSetDefinition,
} from "../../ontology-runtime";
import type { ClientContext } from "../../ontology-runtime/ontologyProvider/calls/ClientContext";
import type { ObjectSet } from "../interfaces/objectSet";
import type { SearchAround } from "../interfaces/searchAround";
import type { OsdkLegacyObjectFrom } from "../OsdkObject";
import { createOsdkObjectSet } from "./OsdkObjectSet";

export function createObjectSetSearchAround<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(
  clientContext: ClientContext,
  sourceApiName: K,
  objectSet: ObjectSetDefinition,
  ontologyDefinition: O,
): SearchAround<OsdkLegacyObjectFrom<O, K>> {
  const result = {} as SearchAround<OsdkLegacyObjectFrom<O, K>>;

  const objectDefinition = clientContext.ontology.objects[sourceApiName];
  for (const [link, { targetType }] of Object.entries(objectDefinition.links)) {
    const key = `searchAround${capitalize(link)}` as keyof typeof result;
    result[key] = () => {
      const definition = {
        type: "searchAround",
        objectSet,
        link,
      } satisfies SearchAroundObjectSetDefinition;

      const objSet = createOsdkObjectSet(
        clientContext,
        targetType,
        definition,
        ontologyDefinition,
      );

      return objSet as ObjectSet<O, any>;
    };
  }

  return result;
}

function capitalize<S extends string>(s: S): Capitalize<S> {
  return (s.charAt(0).toUpperCase() + s.substring(1)) as Capitalize<S>;
}