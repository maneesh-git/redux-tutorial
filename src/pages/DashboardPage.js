import React from 'react';
import { Link } from 'react-router-dom'; 
// To create links to different pages on the router.

const DashboardPage = () => (
    <section>
        <h1>Dashboard</h1>
        <p> This is a dashboard.</p>

        <Link to="/posts" className="button">
            View Posts
        </Link>
    </section>
)

export default DashboardPage;