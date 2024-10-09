import React from 'react';
import image5 from '../../assets/BlogPageAssets/post-5.png'
import image6 from '../../assets/BlogPageAssets/post-6.png'
import image7 from '../../assets/BlogPageAssets/post-7.png'
import image8 from '../../assets/BlogPageAssets/post-8.png'
import image9 from '../../assets/BlogPageAssets/post-9.png'
import image10 from '../../assets/BlogPageAssets/post-10.png'
import image11 from '../../assets/BlogPageAssets/post-11.png'
import image12 from '../../assets/BlogPageAssets/post-12.png'
import image13 from '../../assets/BlogPageAssets/post-13.png'
import FeaturedPostsCard from '../../components/FeaturedPostsCard';


const FeaturedPostsSection = () => {
    return (
        <section>
        <div className='max-w-screen-xl mx-auto'>
        <h2 className="font-bold my-8 text-2xl ">Featured Posts</h2>
       <div className=' grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 gap-5 grid-rows-9 my-8'>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image5} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image6} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image7} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image8} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image9} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image10} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image11} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image12} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>
<FeaturedPostsCard title={"The Ultimate Guide to Google My Business"} description={"Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"} imageUrl={image13} category={"Development"} date={"21st Sep,2020"}></FeaturedPostsCard>

       </div> 

        </div>
        </section>
    );
};

export default FeaturedPostsSection;