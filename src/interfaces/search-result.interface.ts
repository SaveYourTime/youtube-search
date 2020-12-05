interface Thumbnail {
  /**
   * (Optional) Height of the thumbnail image.
   */
  height?: number | null;
  /**
   * The thumbnail image&#39;s URL.
   */
  url?: string | null;
  /**
   * (Optional) Width of the thumbnail image.
   */
  width?: number | null;
}

interface ThumbnailDetails {
  /**
   * The default image for this resource.
   */
  default?: Thumbnail;
  /**
   * The high quality image for this resource.
   */
  high?: Thumbnail;
  /**
   * The maximum resolution quality image for this resource.
   */
  maxres?: Thumbnail;
  /**
   * The medium quality image for this resource.
   */
  medium?: Thumbnail;
  /**
   * The standard quality image for this resource.
   */
  standard?: Thumbnail;
}

interface ResourceId {
  /**
   * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#channel&lt;/code&gt;.
   */
  channelId?: string | null;
  /**
   * The type of the API resource.
   */
  kind?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#playlist&lt;/code&gt;.
   */
  playlistId?: string | null;
  /**
   * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#video&lt;/code&gt;.
   */
  videoId?: string | null;
}

interface SearchResultSnippet {
  /**
   * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
   */
  channelId?: string | null;
  /**
   * The title of the channel that published the resource that the search result identifies.
   */
  channelTitle?: string | null;
  /**
   * A description of the search result.
   */
  description?: string | null;
  /**
   * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it&#39;s &quot;none&quot; if there is not any upcoming/active live broadcasts.
   */
  liveBroadcastContent?: string | null;
  /**
   * The creation date and time of the resource that the search result identifies. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
   */
  publishedAt?: string | null;
  /**
   * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
   */
  thumbnails?: ThumbnailDetails;
  /**
   * The title of the search result.
   */
  title?: string | null;
}

interface SearchResult {
  /**
   * Etag of this resource.
   */
  etag?: string | null;
  /**
   * The &lt;code&gt;id&lt;/code&gt; object contains information that can be used to uniquely identify the resource that matches the search request.
   */
  id?: ResourceId;
  /**
   * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#searchResult&quot;&lt;/code&gt;.
   */
  kind?: string | null;
  /**
   * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video&#39;s title and the description will be the video&#39;s description.
   */
  snippet?: SearchResultSnippet;
}

export default SearchResult;
