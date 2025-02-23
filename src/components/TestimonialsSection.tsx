import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Whiskers",
    feedback:
      "This service is pawsitively amazing! They brought warmth and cool comfort to my home.",
    image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
  },
  {
    id: 2,
    name: "Fluffy",
    feedback:
      "I am feline fine thanks to HVAC Services. Their quality is un-fur-gettable.",
    image: "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg",
  },
  {
    id: 3,
    name: "Tiger",
    feedback:
      "Roaring service with a purrfect touch! My home has never been more comfortable.",
    image: "https://http.cat/images/207.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">What Our Clients Say</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3 testimonial-img"
                    width="80"
                    height="80"
                  />
                  <h5 className="mb-2">{testimonial.name}</h5>
                  <p className="card-text">"{testimonial.feedback}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
