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

import type { ActionTypeApiName } from "../components/ActionTypeApiName";
import type { ActionTypeV2 } from "../components/ActionTypeV2";
import type { AggregateObjectSetRequestV2 } from "../components/AggregateObjectSetRequestV2";
import type { AggregateObjectSetResponseV2 } from "../components/AggregateObjectSetResponseV2";
import type { AggregateObjectsRequestV2 } from "../components/AggregateObjectsRequestV2";
import type { AggregateObjectsResponseV2 } from "../components/AggregateObjectsResponseV2";
import type { ApplyActionRequestV2 } from "../components/ApplyActionRequestV2";
import type { AsyncApplyActionRequestV2 } from "../components/AsyncApplyActionRequestV2";
import type { AsyncApplyActionResponseV2 } from "../components/AsyncApplyActionResponseV2";
import type { AttachmentMetadataResponse } from "../components/AttachmentMetadataResponse";
import type { AttachmentRid } from "../components/AttachmentRid";
import type { AttachmentV2 } from "../components/AttachmentV2";
import type { CountObjectsResponseV2 } from "../components/CountObjectsResponseV2";
import type { DeploymentApiName } from "../components/DeploymentApiName";
import type { DeploymentMetadata } from "../components/DeploymentMetadata";
import type { ExecuteQueryRequest } from "../components/ExecuteQueryRequest";
import type { ExecuteQueryResponse } from "../components/ExecuteQueryResponse";
import type { LinkTypeApiName } from "../components/LinkTypeApiName";
import type { LinkTypeSideV2 } from "../components/LinkTypeSideV2";
import type { ListActionTypesResponseV2 } from "../components/ListActionTypesResponseV2";
import type { ListDeploymentsResponse } from "../components/ListDeploymentsResponse";
import type { ListLinkedObjectsResponseV2 } from "../components/ListLinkedObjectsResponseV2";
import type { ListObjectsResponseV2 } from "../components/ListObjectsResponseV2";
import type { ListObjectTypesV2Response } from "../components/ListObjectTypesV2Response";
import type { ListOntologiesV2Response } from "../components/ListOntologiesV2Response";
import type { ListOutgoingLinkTypesResponseV2 } from "../components/ListOutgoingLinkTypesResponseV2";
import type { ListQueryTypesResponseV2 } from "../components/ListQueryTypesResponseV2";
import type { LoadObjectSetRequestV2 } from "../components/LoadObjectSetRequestV2";
import type { LoadObjectSetResponseV2 } from "../components/LoadObjectSetResponseV2";
import type { ObjectSet } from "../components/ObjectSet";
import type { ObjectSetRid } from "../components/ObjectSetRid";
import type { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import type { ObjectTypeV2 } from "../components/ObjectTypeV2";
import type { OntologyApiName } from "../components/OntologyApiName";
import type { OntologyObjectV2 } from "../components/OntologyObjectV2";
import type { OntologyV2 } from "../components/OntologyV2";
import type { OrderBy } from "../components/OrderBy";
import type { PageSize } from "../components/PageSize";
import type { PageToken } from "../components/PageToken";
import type { PreviewMode } from "../components/PreviewMode";
import type { PropertyApiName } from "../components/PropertyApiName";
import type { PropertyValueEscapedString } from "../components/PropertyValueEscapedString";
import type { QueryApiName } from "../components/QueryApiName";
import type { QueryTypeV2 } from "../components/QueryTypeV2";
import type { SearchObjectsRequestV2 } from "../components/SearchObjectsRequestV2";
import type { SearchObjectsResponseV2 } from "../components/SearchObjectsResponseV2";
import type { SelectedPropertyApiName } from "../components/SelectedPropertyApiName";
import type { StreamTimeSeriesPointsRequest } from "../components/StreamTimeSeriesPointsRequest";
import type { SyncApplyActionResponseV2 } from "../components/SyncApplyActionResponseV2";
import type { TimeSeriesPoint } from "../components/TimeSeriesPoint";
import type { TransformDataRequest } from "../components/TransformDataRequest";
import type { TransformDataResponse } from "../components/TransformDataResponse";
import type { OpenApiRequest } from "../request";

/**
 * Lists the Ontologies visible to the current user.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listOntologiesV2<TResponse>(
  _request: OpenApiRequest<ListOntologiesV2Response, TResponse>,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Gets a specific ontology with the given Ontology RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getOntologyV2<TResponse>(
  _request: OpenApiRequest<OntologyV2, TResponse>,
  ontology: OntologyApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the action types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listActionTypesV2<TResponse>(
  _request: OpenApiRequest<ListActionTypesResponseV2, TResponse>,
  ontology: OntologyApiName,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/actionTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific action type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getActionTypeV2<TResponse>(
  _request: OpenApiRequest<ActionTypeV2, TResponse>,
  ontology: OntologyApiName,
  actionType: ActionTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/actionTypes/${actionType}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the object types for the given Ontology.
 *
 * Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are
 * more results available, at least one result will be present in the
 * response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listObjectTypesV2<TResponse>(
  _request: OpenApiRequest<ListObjectTypesV2Response, TResponse>,
  ontology: OntologyApiName,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific object type with the given API name.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getObjectTypeV2<TResponse>(
  _request: OpenApiRequest<ObjectTypeV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes/${objectType}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * List the outgoing links for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function listOutgoingLinkTypesV2<TResponse>(
  _request: OpenApiRequest<ListOutgoingLinkTypesResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes/${objectType}/outgoingLinkTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get an outgoing link for an object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getOutgoingLinkTypeV2<TResponse>(
  _request: OpenApiRequest<LinkTypeSideV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  linkType: LinkTypeApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectTypes/${objectType}/outgoingLinkTypes/${linkType}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the objects for the given Ontology and object type.
 *
 * Note that this endpoint does not guarantee consistency. Changes to the data could result in missing or
 * repeated objects in the response pages.
 *
 * This endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned.
 *
 * Each page may be smaller or larger than the requested page size. However, it
 * is guaranteed that if there are more results available, at least one result will be present
 * in the response, up to 10,000 results.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listObjectsV2<TResponse>(
  _request: OpenApiRequest<ListObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  queryParameters: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    select: Array<SelectedPropertyApiName>;
    orderBy?: OrderBy;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific object with the given primary key.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getObjectV2<TResponse>(
  _request: OpenApiRequest<OntologyObjectV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  queryParameters: {
    select: Array<SelectedPropertyApiName>;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Returns a count of the objects of the given object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function countObjects<TResponse>(
  _request: OpenApiRequest<CountObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/count`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Search for objects in the specified ontology and object type. The request body is used
 * to filter objects based on the specified query. The supported queries are:
 *
 * | Query type                              | Description                                                                                                       | Supported Types                 |
 * |-----------------------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------|
 * | lt                                      | The provided property is less than the provided value.                                                            | number, string, date, timestamp |
 * | gt                                      | The provided property is greater than the provided value.                                                         | number, string, date, timestamp |
 * | lte                                     | The provided property is less than or equal to the provided value.                                                | number, string, date, timestamp |
 * | gte                                     | The provided property is greater than or equal to the provided value.                                             | number, string, date, timestamp |
 * | eq                                      | The provided property is exactly equal to the provided value.                                                     | number, string, date, timestamp |
 * | isNull                                  | The provided property is (or is not) null.                                                                        | all                             |
 * | contains                                | The provided property contains the provided value.                                                                | array                           |
 * | not                                     | The sub-query does not match.                                                                                     | N/A (applied on a query)        |
 * | and                                     | All the sub-queries match.                                                                                        | N/A (applied on queries)        |
 * | or                                      | At least one of the sub-queries match.                                                                            | N/A (applied on queries)        |
 * | startsWith                              | The provided property starts with the provided value.                                                             | string                          |
 * | containsAllTermsInOrderPrefixLastTerm   | The provided property contains all the terms provided in order. The last term can be a partial prefix match.      | string                          |
 * | containsAllTermsInOrder                 | The provided property contains the provided value as a substring.                                                 | string                          |
 * | containsAnyTerm                         | The provided property contains at least one of the terms separated by whitespace.                                 | string                          |
 * | containsAllTerms                        | The provided property contains all the terms separated by whitespace.                                             | string                          |
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function searchObjectsV2<TResponse>(
  _request: OpenApiRequest<SearchObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  request: SearchObjectsRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/search`,
    request,
    __undefined,
    __undefined,
  );
}

/** Temporary endpoint for search. */
export function deprecatedSearchObjectsV2<TResponse>(
  _request: OpenApiRequest<SearchObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  request: SearchObjectsRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/_search`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Perform functions on object fields in the specified ontology and object type.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function aggregateObjectsV2<TResponse>(
  _request: OpenApiRequest<AggregateObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  request: AggregateObjectsRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/aggregate`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Temporary endpoint for aggregations
 */
export function deprecatedAggregateObjectsV2<TResponse>(
  _request: OpenApiRequest<AggregateObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  request: AggregateObjectsRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/_aggregate`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the linked objects for a specific object and the given link type.
 *
 * Note that this endpoint does not guarantee consistency. Changes to the data could result in missing or
 * repeated objects in the response pages.
 *
 * This endpoint returns a maximum of 10,000 objects. After 10,000 objects have been returned and if more objects
 * are available, attempting to load another page will result in an `ObjectsExceededLimit` error being returned.
 *
 * Each page may be smaller or larger than the requested page size. However, it
 * is guaranteed that if there are more results available, at least one result will be present
 * in the response, up to 10,000 results.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listLinkedObjectsV2<TResponse>(
  _request: OpenApiRequest<ListLinkedObjectsResponseV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  linkType: LinkTypeApiName,
  queryParameters: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    select: Array<SelectedPropertyApiName>;
    orderBy?: OrderBy;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/links/${linkType}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get a specific linked object that originates from another object.
 *
 * If there is no link between the two objects, `LinkedObjectNotFound` is thrown.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getLinkedObjectV2<TResponse>(
  _request: OpenApiRequest<OntologyObjectV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  linkType: LinkTypeApiName,
  linkedObjectPrimaryKey: PropertyValueEscapedString,
  queryParameters: {
    select: Array<SelectedPropertyApiName>;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/links/${linkType}/${linkedObjectPrimaryKey}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Get the metadata of attachments parented to the given object.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentsV2<TResponse>(
  _request: OpenApiRequest<AttachmentMetadataResponse, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Get the metadata of a particular attachment in an attachment list.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentByRidV2<TResponse>(
  _request: OpenApiRequest<AttachmentV2, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  attachmentRid: AttachmentRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}/${attachmentRid}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentContentV2<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}/content`,
    __undefined,
    __undefined,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

/**
 * Get the content of an attachment by its RID.
 *
 * The RID must exist in the attachment array of the property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getAttachmentContentByRidV2<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  attachmentRid: AttachmentRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/attachments/${property}/${attachmentRid}/content`,
    __undefined,
    __undefined,
    __undefined,
    __undefined,
    __anyMediaType,
  );
}

/**
 * Get the first point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getFirstPoint<TResponse>(
  _request: OpenApiRequest<TimeSeriesPoint, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/timeseries/${property}/firstPoint`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Get the last point of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function getLastPoint<TResponse>(
  _request: OpenApiRequest<TimeSeriesPoint, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/timeseries/${property}/lastPoint`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Stream all of the points of a time series property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function streamPoints<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  ontology: OntologyApiName,
  objectType: ObjectTypeApiName,
  primaryKey: PropertyValueEscapedString,
  property: PropertyApiName,
  request: StreamTimeSeriesPointsRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objects/${objectType}/${primaryKey}/timeseries/${property}/streamPoints`,
    request,
    __undefined,
    __undefined,
    __applicationJson,
    __anyMediaType,
  );
}

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionV2<TResponse>(
  _request: OpenApiRequest<SyncApplyActionResponseV2, TResponse>,
  ontology: OntologyApiName,
  action: ActionTypeApiName,
  request: ApplyActionRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/actions/${action}/apply`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Applies an action using the given parameters.
 *
 * Changes to the Ontology are eventually consistent and may take some time to be visible.
 *
 * Note that [parameter default values](/docs/foundry/action-types/parameters-default-value/) are not currently supported by
 * this endpoint.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data api:write-data`.
 */
export function applyActionAsyncV2<TResponse>(
  _request: OpenApiRequest<AsyncApplyActionResponseV2, TResponse>,
  ontology: OntologyApiName,
  action: ActionTypeApiName,
  request: AsyncApplyActionRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/actions/${action}/applyAsync`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Lists the query types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function listQueryTypesV2<TResponse>(
  _request: OpenApiRequest<ListQueryTypesResponseV2, TResponse>,
  ontology: OntologyApiName,
  queryParameters?: {
    pageSize?: PageSize;
    pageToken?: PageToken;
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/queryTypes`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets a specific query type with the given API name.
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getQueryTypeV2<TResponse>(
  _request: OpenApiRequest<QueryTypeV2, TResponse>,
  ontology: OntologyApiName,
  queryApiName: QueryApiName,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/queryTypes/${queryApiName}`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

/**
 * Executes a Query using the given parameters.
 *
 * Optional parameters do not need to be supplied.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:read-data`.
 */
export function executeQueryV2<TResponse>(
  _request: OpenApiRequest<ExecuteQueryResponse, TResponse>,
  ontology: OntologyApiName,
  queryApiName: QueryApiName,
  request: ExecuteQueryRequest,
  queryParameters?: {
    preview?: PreviewMode;
  },
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/queries/${queryApiName}/execute`,
    request,
    queryParameters,
    __undefined,
  );
}

/**
 * Gets the definition of the `ObjectSet` with the given RID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function getObjectSetV2<TResponse>(
  _request: OpenApiRequest<ObjectSet, TResponse>,
  ontology: OntologyApiName,
  objectSetRid: ObjectSetRid,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/objectSets/${objectSetRid}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Load the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function loadObjectSetV2<TResponse>(
  _request: OpenApiRequest<LoadObjectSetResponseV2, TResponse>,
  ontology: OntologyApiName,
  request: LoadObjectSetRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objectSets/loadObjects`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Aggregates the ontology objects present in the `ObjectSet` from the provided object set definition.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function aggregateObjectSetV2<TResponse>(
  _request: OpenApiRequest<AggregateObjectSetResponseV2, TResponse>,
  ontology: OntologyApiName,
  request: AggregateObjectSetRequestV2,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/objectSets/aggregate`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Fetches a list of the available model deployments within a given Ontology.
 */
export function listDeployments<TResponse>(
  _request: OpenApiRequest<ListDeploymentsResponse, TResponse>,
  ontology: OntologyApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/models/deployments`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Fetches information about a model deployment within a given Ontology.
 */
export function getDeployment<TResponse>(
  _request: OpenApiRequest<DeploymentMetadata, TResponse>,
  ontology: OntologyApiName,
  deployment: DeploymentApiName,
): Promise<TResponse> {
  return _request(
    "GET",
    `/v2/ontologies/${ontology}/models/deployments/${deployment}`,
    __undefined,
    __undefined,
    __undefined,
  );
}

/**
 * Use a given model deployment to transform the provided data.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 */
export function transformDeployment<TResponse>(
  _request: OpenApiRequest<TransformDataResponse, TResponse>,
  ontology: OntologyApiName,
  deployment: DeploymentApiName,
  request: TransformDataRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v2/ontologies/${ontology}/models/deployments/${deployment}/transform`,
    request,
    __undefined,
    __undefined,
  );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
