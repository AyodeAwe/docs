var searchData=
[
  ['pairwise_5flinestring_5fdistance_155',['pairwise_linestring_distance',['../group__distance.html#gae61407b9d80821a2830122e17d41e8ab',1,'cuspatial::pairwise_linestring_distance(cudf::device_span&lt; cudf::size_type const &gt; linestring1_offsets, cudf::column_view const &amp;linestring1_points_x, cudf::column_view const &amp;linestring1_points_y, cudf::device_span&lt; cudf::size_type const &gt; linestring2_offsets, cudf::column_view const &amp;linestring2_points_x, cudf::column_view const &amp;linestring2_points_y, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())'],['../group__distance.html#gaa675cb51f5631564346b00e3d4e32268',1,'cuspatial::pairwise_linestring_distance(OffsetIterator linestring1_offsets_first, OffsetIterator linestring1_offsets_last, Cart2dItA linestring1_points_first, Cart2dItA linestring1_points_last, OffsetIterator linestring2_offsets_first, Cart2dItB linestring2_points_first, Cart2dItB linestring2_points_last, OutputIt distances_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)']]],
  ['pairwise_5fpoint_5fdistance_156',['pairwise_point_distance',['../group__distance.html#ga5409b45e42f6972cc7e58852f04597d8',1,'cuspatial::pairwise_point_distance(cudf::column_view const &amp;points1_x, cudf::column_view const &amp;points1_y, cudf::column_view const &amp;points2_x, cudf::column_view const &amp;points2_y, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())'],['../group__distance.html#ga9c29838f51030d5bc8f6d6e181ff0708',1,'cuspatial::pairwise_point_distance(Cart2dItA points1_first, Cart2dItA points1_last, Cart2dItB points2_first, OutputIt distances_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)']]],
  ['pairwise_5fpoint_5flinestring_5fdistance_157',['pairwise_point_linestring_distance',['../point__linestring__distance_8hpp.html#a9597144f620390387d009dcaff584eba',1,'cuspatial::pairwise_point_linestring_distance(std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multipoint_geometry_offsets, cudf::column_view const &amp;points_xy, std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multilinestring_geometry_offsets, cudf::device_span&lt; cudf::size_type const &gt; linestring_part_offsets, cudf::column_view const &amp;linestring_points_xy, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())'],['../group__distance.html#gacfef4cb66380b8c846b50005072774ed',1,'cuspatial::pairwise_point_linestring_distance(OffsetIteratorA point_geometry_offset_first, OffsetIteratorA point_geometry_offset_last, Cart2dItA points_first, Cart2dItA points_last, OffsetIteratorB linestring_geometry_offset_first, OffsetIteratorC linestring_part_offsets_first, OffsetIteratorC linestring_part_offsets_last, Cart2dItB linestring_points_first, Cart2dItB linestring_points_last, OutputIt distances_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)']]],
  ['pairwise_5fpoint_5flinestring_5fnearest_5fpoints_158',['pairwise_point_linestring_nearest_points',['../point__linestring__nearest__points_8cuh.html#a1b619aebba71c27503d10189cc3280c5',1,'cuspatial::pairwise_point_linestring_nearest_points(OffsetIteratorA points_geometry_offsets_first, OffsetIteratorA points_geometry_offsets_last, Vec2dItA points_first, Vec2dItA points_last, OffsetIteratorB linestring_geometry_offsets_first, OffsetIteratorC linestring_part_offsets_first, OffsetIteratorC linestring_part_offsets_last, Vec2dItB linestring_points_first, Vec2dItB linestring_points_last, OutputIt output_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)'],['../group__nearest__points.html#gad4a5676b6677d45db20be775db3a5b1b',1,'cuspatial::pairwise_point_linestring_nearest_points(std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multipoint_geometry_offsets, cudf::column_view points_xy, std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multilinestring_geometry_offsets, cudf::device_span&lt; cudf::size_type const &gt; linestring_part_offsets, cudf::column_view linestring_points_xy, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())']]],
  ['point_5fin_5fpolygon_159',['point_in_polygon',['../group__spatial__relationship.html#gaa85dc3aafb04c02e6dca08edccf6fd92',1,'cuspatial::point_in_polygon(Cart2dItA test_points_first, Cart2dItA test_points_last, OffsetIteratorA polygon_offsets_first, OffsetIteratorA polygon_offsets_last, OffsetIteratorB poly_ring_offsets_first, OffsetIteratorB poly_ring_offsets_last, Cart2dItB polygon_points_first, Cart2dItB polygon_points_last, OutputIt output, rmm::cuda_stream_view stream=rmm::cuda_stream_default)'],['../group__spatial__relationship.html#ga889dbc7d657fd83ba40dc572a94a5e48',1,'cuspatial::point_in_polygon(cudf::column_view const &amp;test_points_x, cudf::column_view const &amp;test_points_y, cudf::column_view const &amp;poly_offsets, cudf::column_view const &amp;poly_ring_offsets, cudf::column_view const &amp;poly_points_x, cudf::column_view const &amp;poly_points_y, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())']]],
  ['points_5fin_5fspatial_5fwindow_160',['points_in_spatial_window',['../group__spatial__relationship.html#gac6d17ba1201e752fbc6bd2770bb2fb2f',1,'cuspatial']]],
  ['polygon_5fbounding_5fboxes_161',['polygon_bounding_boxes',['../group__spatial__relationship.html#ga34759bbd219ac8f4eb30fe560f0e7ba4',1,'cuspatial']]],
  ['polyline_5fbounding_5fboxes_162',['polyline_bounding_boxes',['../group__spatial__relationship.html#ga17ba4bd8da8e5725e172a8f9868b5bf7',1,'cuspatial']]]
];
