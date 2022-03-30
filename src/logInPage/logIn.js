import '../logInPage/login.css';

function logIn() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="modal-box">
                        <button type="button" class="btn btn-primary btn-lg show-modal" data-toggle="modal"
                            data-target="#myModal">
                            <span>Account Login</span>
                        </button>

                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content clearfix">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                    <div class="modal-body">
                                        <h3 class="title">Account Login</h3>
                                        <p class="description">Login here using your Registration Number & Password</p>
                                        <div class="form-group">
                                            <span class="input-icon"><i class="fa fa-user"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter registration number" />
                                        </div>
                                        <div class="form-group">
                                            <span class="input-icon"><i class="fas fa-key"></i></span>
                                            <input type="password" class="form-control" placeholder="Enter your password" />
                                        </div>
                                        <div class="form-group checkbox">
                                            <input type="checkbox" />
                                            <label>Remember Me</label>
                                        </div>
                                        <a href="#" class="forgot-pass">Forgot Password?</a>
                                        <button id="myButton" class="btn">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default logIn;