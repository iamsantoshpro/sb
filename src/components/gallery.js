import React,{Component} from 'react'
import SampleCard from '../components/sampleCard'
import $ from "jquery";


class Gallery extends Component{
    componentDidMount(){
        $(function(){
            $('.box-hidden').slice(0,3).show();
            $('#load-more').on("click",function(e){
                e.preventDefault();
                $(".box-hidden:hidden").slice(0,4).fadeIn();
                if($('.box-hidden:hidden').length===0){
                    $('#load').fadeOut('slow');
                }
                // $('html,body').animate({
                //     scrollTop: $(this).offset().top
                // },2000)
            })
        })
    }
render(){
    return(
        <div id="features" className="hide-details Our-Specialities-container">
        <div className="container">
        <div className="row">
        <div className="wrap card-wrapper col-lg-12">
        <div className="row">
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img1.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img2.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img3.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img4.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img5.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img6.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img7.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img8.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img9.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img10.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img11.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img12.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img13.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img14.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img15.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img16.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img17.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img18.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img19.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img20.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img21.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img22.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img23.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img24.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img25.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img26.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img27.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img28.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img29.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img30.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img31.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img32.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img33.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
    
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img34.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img35.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img36.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img37.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img38.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img39.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img40.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img41.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img42.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img43.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img44.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img45.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img46.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img47.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img48.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img49.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img50.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img51.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img52.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
        <SampleCard sampleImage={process.env.PUBLIC_URL + '/images/img53.jpg'} sampleTitle="Title" sampleSubtitle="Subtitle" />
    
        </div>
        </div>
        </div>
        <div className="row">
        <div className="wrap-button col-lg-12">
        <span id="load-more" className="btn-load">Load More Posts</span>
        </div>
        </div>
        </div>
        </div>
    )
}
}

export default Gallery