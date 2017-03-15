---
layout: wall
title: Photo
permalink: /photo/
images:
  - image_path: /gallery/34.jpg
    tn_path: /gallery/tn/34_tn.jpg
    title: Breaking Free
    loc: Meng Minwei Music Hall, Tsinghua University, Beijing, China
  - image_path: /gallery/32.jpg
    tn_path: /gallery/tn/32_tn.jpg
    title: Golden Days 
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/35.jpg
    tn_path: /gallery/tn/35_tn.jpg
    title: A Bird's Eye View 
    loc: Shanghai, China
  - image_path: /gallery/24.jpg
    tn_path: /gallery/tn/24_tn.jpg
    title: Ginkgo Leaves after a Snow 
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/26.jpg
    tn_path: /gallery/tn/26_tn.jpg
    title: Morning Call
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/27.jpg
    tn_path: /gallery/tn/27_tn.jpg
    title: Everybody Loves Sashimi
    loc: Yu Ye Restaurant, Beijing, China
  - image_path: /gallery/25.jpg
    tn_path: /gallery/tn/25_tn.jpg
    title: Blizzard
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/19.jpg
    tn_path: /gallery/tn/19_tn.jpg
    title: A leisurely afternoon
    loc: Stanley Market, HongKong, China
  - image_path: /gallery/18.jpg
    tn_path: /gallery/tn/18_tn.jpg
    title: The Islands
    loc: On the way to Shenzhen, HongKong, China
  - image_path: /gallery/23.jpg
    tn_path: /gallery/tn/23_tn.jpg
    title: The Playground
    loc: Wu Kai Sha Youth Camp, HongKong, China
  - image_path: /gallery/17.jpg
    tn_path: /gallery/tn/17_tn.jpg
    title: The Tourists
    loc: Ruins of St. Paul, Macau, China
  - image_path: /gallery/16.jpg
    tn_path: /gallery/tn/16_tn.jpg
    title: An Heart-shaped Tree
    loc: Macau Science Center, Macau, China
  - image_path: /gallery/20.jpg
    tn_path: /gallery/tn/20_tn.jpg
    title: An Unanticipated Sunset
    loc: HongKong's Convention and Exhibition Center, HongKong, China
  - image_path: /gallery/1.jpg
    tn_path: /gallery/tn/1_tn.jpg
    title: Reflection
    loc: Moonlight over the Lotus Pond, Tsinghua University, Beijing, China
  - image_path: /gallery/2.jpg
    tn_path: /gallery/tn/2_tn.jpg
    title: You said you're waiting for a heavy rain
    loc: Nanjing University, Nanjing, China
  - image_path: /gallery/3.jpg
    tn_path: /gallery/tn/3_tn.jpg
    title: The Main Building
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/4.jpg
    tn_path: /gallery/tn/4_tn.jpg
    title: Tsinghua School
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/14.jpg
    tn_path: /gallery/tn/14_tn.jpg
    title: The Spring Breeze
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/5.jpg 
    tn_path: /gallery/tn/5_tn.jpg
    title: Lotus Leaves
    loc: Southern Song Imperial Street, Hangzhou, China
  - image_path: /gallery/6.jpg
    tn_path: /gallery/tn/6_tn.jpg
    title: Lost
    loc: Great Ocean Road, Melbourne, Australia
  - image_path: /gallery/7.jpg
    tn_path: /gallery/tn/7_tn.jpg
    title: Lovers
    loc: Lover's Slope, Tsinghua University, Beijing, China
  - image_path: /gallery/8.jpg
    tn_path: /gallery/tn/8_tn.jpg
    title: A Poetic Dusk
    loc: Lover's Slope, Tsinghua University, Beijing, China
  - image_path: /gallery/9.jpg
    tn_path: /gallery/tn/9_tn.jpg
    title: Summer
    loc: Forbidden City, Beijing, China
  - image_path: /gallery/10.jpg
    tn_path: /gallery/tn/10_tn.jpg
    title: Clouds
    loc: Tsinghua University, Beijing, China
  - image_path: /gallery/11.jpg
    tn_path: /gallery/tn/11_tn.jpg
    title: Seeker
    loc: Hefang Street, Hangzhou, China
  - image_path: /gallery/12.jpg
    tn_path: /gallery/tn/12_tn.jpg
    title: A Fresh Morning
    loc: Yarra River, Melbourne, Australia
  - image_path: /gallery/13.jpg
    tn_path: /gallery/tn/13_tn.jpg
    title: A Happy Couple
    loc: Laker's, Beijing, China
---

<div class = "photo-gallery" id="aniimated-thumbnials">
	{% for image in page.images %}
	<div>
		   <a href="{{ image.image_path }}" data-sub-html="<h4>{{image.title}}<h4><p>{{image.loc}}</p>">
		      <img src="{{ image.tn_path }}"/>
		      <div class="overlay">
		            <h2>{{image.title}}</h2>
		      </div>
		  </a>
	</div>
  	{% endfor %}
</div>


<script type="text/javascript">
    $(document).ready(function() {
        $("#lightgallery").lightGallery(); 
    });

    $('#aniimated-thumbnials').lightGallery({
	    thumbnail:true
	}); 
</script>