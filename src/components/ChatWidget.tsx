import React, { useState, useEffect } from 'react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAttention, setShowAttention] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Show the attention message after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAttention(true);
      // Hide after 4 seconds
      setTimeout(() => {
        setShowAttention(false);
      }, 4000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSubmitted(false);
    // Also hide the attention message if user interacts
    setShowAttention(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Chat form submitted: ', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {isOpen && (
        <div className="chat-widget">
          <div className="card shadow chat-card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <span>Contact Us</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={toggleChat}
              >
                X
              </button>
            </div>
            <div className="card-body">
              {submitted ? (
                <div className="alert alert-success" role="alert">
                  Your message has been sent!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-sm"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-sm"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <textarea
                      name="message"
                      className="form-control form-control-sm"
                      placeholder="Your Message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm w-100"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Attention Message */}
      {showAttention && !isOpen && (
        <div className="chat-attention-message">
          Need help? Chat with us!
        </div>
      )}

      <button
        className="chat-toggle btn btn-primary rounded-circle"
        onClick={toggleChat}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4.406 6.342A5.53 5.53 0 0 1 8 4c2.087 0 3.888 1.324 4.494 3.157.326.76.506 1.66.506 2.657 0 2.21-1.79 4-4 4H5c-2.21 0-4-1.79-4-4 0-.998.18-1.897.506-2.657.606-1.833 2.407-3.157 4.494-3.157z"/>
        </svg>
      </button>
    </>
  );
};

export default ChatWidget;
