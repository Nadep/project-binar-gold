import "./style.css"

const WhyUs = ({ children }) => {
    return (
        <div>
            <h3>WhyUs</h3>
            <p>Mengapa harus pilih Binar Car Rental</p>
            <div clssName="flex-container">{children}</div>
        </div>
    );
};

export default WhyUs;