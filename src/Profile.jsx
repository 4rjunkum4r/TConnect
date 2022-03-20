function Profile() {
    return (


        <div classname="card" >
            <img src="src\images\t1.jpg" classname="card-img-top" alt="..." />
            <div classname="card-body">
                <h5 classname="card-title">Aman Gupta</h5>
                <p classname="card-text"><strong>Courses Teaching This Semester.</strong> </p>
            </div>
            <ul classname="list-group list-group-flush">
                <li classname="list-group-item">Bussiness Marketing</li>
                <li classname="list-group-item">Communication</li>

            </ul>
            <div classname="card-body">
                <button type="button" classname="btn btn-secondary">E-Mail</button>
                <button type="button" classname="btn btn-info">Book Appointment</button>
            </div>
        </div>


    );
}

export default Profile;