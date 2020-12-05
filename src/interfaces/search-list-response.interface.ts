import SearchResult from './search-result.interface';

interface PageInfo {
  /**
   * The number of results included in the API response.
   */
  resultsPerPage?: number | null;
  /**
   * The total number of results in the result set.
   */
  totalResults?: number | null;
}

interface SearchListResponse {
  /**
   * Etag of this resource.
   */
  etag?: string | null;
  /**
   * Serialized EventId of the request which produced this response.
   */
  eventId?: string | null;
  /**
   * Pagination information for token pagination.
   */
  items?: SearchResult[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#searchListResponse&quot;&lt;/code&gt;.
   */
  kind?: string | null;
  /**
   * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
   */
  nextPageToken?: string | null;
  /**
   * General pagination information.
   */
  pageInfo?: PageInfo;
  /**
   * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
   */
  prevPageToken?: string | null;
  regionCode?: string | null;
  tokenPagination?: {};
  /**
   * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
   */
  visitorId?: string | null;
}

export default SearchListResponse;
