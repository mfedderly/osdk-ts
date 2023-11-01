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

import * as path from "node:path";
import type { MinimalFs } from "../MinimalFs";
import { formatTs } from "../util/test/formatTs";

export async function generateIndexFile(fs: MinimalFs, outDir: string) {
  await fs.writeFile(
    path.join(outDir, "index.ts"),
    await formatTs(`// Path: ${path.join(outDir, "index.ts")}
    export * from "@osdk/legacy-client";

    export { Ontology } from "./Ontology";
    export { FoundryClient } from "./FoundryClient";
    `),
  );
}

/**
 TODO: We need to verify that all these things
    * The internally generated client looks similar to this:
       export { FoundryClient } from "./FoundryClient";
       export {
         TimeSeries,
         TimeSeriesPoint,
         Timestamp,
         LocalDate,
         ActionExecutionMode,
         ActionResponse,
         ActionValidationResult,
         QueryResponse,
         GeoShape,
         GeoPoint,
         Polygon,
         Op,
         Attachment,
         AttachmentMetadata,
         ReturnEditsMode,
         Edits,
         AggregationGroup,
         AggregationResult,
         AggregatableObjectSet,
         isErr,
         isOk,
         Result,
         GetObjectError,
         GetLinkedObjectError,
         ListObjectsError,
         LoadObjectSetError,
         ListLinkedObjectsError,
         AttachmentsError,
         SearchObjectsError,
         AggregateObjectsError,
         QueryError,
         ActionError,
         ErrorVisitor,
         visitError,
         TimeSeriesError,
         PermissionDenied,
         Unauthorized,
         UnknownError,
         FoundryApiError,
         Page,
         ArrayType,
         BooleanType,
         ByteType,
         DateType,
         DecimalType,
         DoubleType,
         FloatType,
         GeoPointType,
         GeoShapeType,
         IntegerType,
         LongType,
         ShortType,
         StringType,
         TimeSeriesType,
         TimestampType,
         StructType,
         StructField,
         SetType,
         ObjectType,
         AttachmentType,
       } from "./internal/@foundry/ontology-runtime/dist";
       export {
         PublicClientAuth,
         ConfidentialClientAuth,
         UserTokenAuth,
       } from "./internal/@foundry/oauth-client/dist";
    */