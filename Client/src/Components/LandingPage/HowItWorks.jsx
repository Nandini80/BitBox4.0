function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="step-list">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Upload Video</h3>
            <p>Upload the video you want to analyze for deepfake content.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>AI Analysis</h3>
            <p>Our advanced AI algorithms analyze the video for any signs of manipulation.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Report Generation</h3>
            <p>Receive a detailed report outlining the likelihood of the video being a deepfake.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
