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
                            <Image
                                className="d-block w-100"
                                src={'../src/assets/images/' + item.fileName}
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