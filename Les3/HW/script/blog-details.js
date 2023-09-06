Vue.component('blog-details', {
    props : ['news', 'detailedBlog'],
    
    template: `
        <section class="blog_details_description">
            <h1 class="blog_details_description__title">{{ this.news[this.detailedBlog - 1].title }}</h1>
            <img class="blog_details_description__titleImg" src="img/blog_photo1.png" alt="blog_photo">

            <div class="blog_details_description_info">
                <p class="blog_details_description_info__date">{{ this.news[this.detailedBlog - 1].date }}</p>
                <p class="blog_details_description_info__bread">Interior / Home / Decore</p>
            </div>

            <p class="blog_details_description__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
        
            <p class="blog_details_description__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>

            <article class="blog_details_description_quote">
                <span class="blog_details_description_quote__symbol"><svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z" fill="#CDA274"/>
                    </svg>
                </span>
                <p class="blog_details_description_quote__text">The details are not the details. 
                They make the design.</p>
            </article>

            <h2 class="blog_details_description__subtitle">Design sprints are great</h2>
            <p class="blog_details_description__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

            <ul class="blog_details_description__list">
                <li class="blog_details_description__list__item"><span class="blog_details_description__list__item__number">1</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>

                <li class="blog_details_description__list__item"><span class="blog_details_description__list__item__number">2</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>

                <li class="blog_details_description__list__item"><span class="blog_details_description__list__item__number">3</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ul>

            <img class="blog_details_description__subtitleImg" src="img/blog_photo2.png" alt="blog_photo">

            <p class="blog_details_description__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </section>`,
});