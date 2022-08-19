import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function ImageSlider(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <section id="imageSlider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    props.sliderImages.map((item, index) => 
                        
                        <Carousel.Item key={`slider-${index}`}>
                            {/* import.meta.url is a native ESM feature that exposes the current module's URL  */}
                            <Image
                                className="d-block w-100"
                                src={new URL('../assets/images/' + item.fileName, import.meta.url).href}
                                alt={`Loading-${index}...`}
                                style={{ maxHeight: "607px"}}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.summary}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </section>
    );
}