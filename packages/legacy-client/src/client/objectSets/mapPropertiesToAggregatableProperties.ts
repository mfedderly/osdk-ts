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
import type { AggregatableProperty } from "../../ontology-runtime";
import { DefaultAggregatableProperty } from "../../ontology-runtime";
import type { AggregateSelection } from "../interfaces/aggregations";
import type { OsdkLegacyObjectFrom } from "../OsdkObject";

export function mapPropertiesToAggregatableProperties<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(ontology: O, apiName: K) {
  return Object.entries(
    ontology.objects[apiName].properties,
  ).reduce(
    (acc, [property, _definition]) => {
      // TODO use definitions to be more accurate here (exclude some properties and use a better metric for others)
      acc[property] = DefaultAggregatableProperty(
        property,
      );
      return acc;
    },
    {} as Record<string, AggregatableProperty<any>>,
  ) as AggregateSelection<OsdkLegacyObjectFrom<O, K>>;
}