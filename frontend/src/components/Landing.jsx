import image from '../assets/logo.png';
import logo from '../assets/spectra_logo.png';

export default function Landing() {
    return (
        <div className="container">
            <div className="ml-4">
                <h1 className="text-start ">
                    <img src={logo} alt="logo" className="me-2" style={{  height: '80px' }} />                  
                </h1>
            </div>
            <div style={{marginTop: "10rem"}} className="text-start row  -success">
                <div className="col-12 col-lg-4 col-md-4 col-sm-12  -dark">
                    <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                        <img src={image} style={{ width: '85%'}} alt="logo" />
                    </div>
                </div>
                <div className="col-12 col-lg-8 col-md-8 col-sm-12 -warning">
                    <p className="fw-bolder fs-5 pt-2 text-uppercase">Design the Future</p>
                    <div>
                        <h1 className="pb-4 fs-0 fw-bolder">The AI That Sees,
                            Hears &
                            Understands</h1>
                    </div>
                    <div className="pt-0 pb-3">
                        <button className="btn-custom"><span className='text-light text-uppercase'>Get Started</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}