import React from 'react'
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

export const Services = () => {
    return (
        <div>
            <section className="grid">
                <h3>We provide service all over india</h3>
                <div className="grid-items">
                    <div>
                        <img src={image1} alt="" />
                        <h4>Type 1</h4>
                        <p>Write something about type 1</p>
                    </div>

                    <div>
                        <img src={image2} alt="" />
                        <h4>Type 2</h4>
                        <p>Write something about type 2</p>
                    </div>

                    <div>
                        <img src={image3} alt="" />
                        <h4>Type 3</h4>
                        <p>Write something about type 3</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
