$(document).ready(function() {
    // Dynamically insert Hero Section
    $("#main-content").append(`
        <section class="hero text-center py-5">
            <h1>Muslim Student Association<br>Of Marlboro</h1>
        </section>
    `);

    // Dynamically insert Image Section
    $("#main-content").append(`
        <section class="images d-flex justify-content-center gap-4">
            <div class="image-container">
                <img src="Masjid-nabawi.jpg" alt="Masjid Nabawi" class="img-fluid rounded">
            </div>
            <div class="image-container">
                <img src="Makkah...jpg" alt="Kaaba in Makkah" class="img-fluid rounded">
            </div>
        </section>
    `);
});

$(document).ready(function() {
    // Dynamically insert content for the Islam page
    $('#main-content').html(`
        <p>Islam means submission to God. A Muslim is one who submits. Islam is a monotheistic faith that believes in one God.</p>
    `);
});
$(document).ready(function() {
    // Dynamically insert content for the Club Info page
    $('#main-content').html(`
        <div class="row">
            <!-- Upcoming Meetings Section -->
            <div class="col-md-6">
                <div class="card">
                    <h3 class="text-success">Upcoming Meetings</h3>
                    <p>2/27</p>
                    <p>3/13</p>
                    <p>3/27</p>
                </div>
            </div>

            <!-- Club Activities Section -->
            <div class="col-md-6">
                <div class="card">
                    <h3 class="text-success">Club Activities</h3>
                    <ul>
                        <li>Prayers | Dhuhr prayer 12:25 | Jummah 12:25</li>
                        <li>Meetings | Room A111</li>
                        <li>Fundraising Events</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Classroom Code & Contact Information Section -->
        <div class="card text-center">
            <h4 class="text-success">Classroom Code</h4>
            <p><strong>7jjhmhr</strong></p>

            <h4 class="text-success">Contact</h4>
            <p><strong>526zali@frhsd.com</strong></p>
            <p><strong>526tnaqvi@frhsd.com</strong></p>
            <p><strong>525isyed@frhsd.com</strong></p>
        </div>
    `);
});
