import "./style.css"

const Navbar = () => {
    return (
        <>
            {/* //navbar */}
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Our Services</a>
                                <a class="nav-link" href="#">Why Us</a>
                                <a class="nav-link" href="#">Testimonial</a>
                                <a class="nav-link disabled">FAQ</a>
                            </div>
                        </div>
                        {/* // container */}
                        <div class="text-center">
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar