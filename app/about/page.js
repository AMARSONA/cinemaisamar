import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-8 md:px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Welcome to Cinema is Amar</h1>
            <p className="text-lg mb-6">
                I&apos;m Amar, and this channel is dedicated to all things cinema. From detailed movie reviews and web series breakdowns to deep dives into the art of filmmaking, this is your place if you love watching and talking about movies.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="/group.gif" alt="Fans Want to Collaborate" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2"> Let&apos;s Collaborate</h3>
                        <p>If it&apos;s about entertainment,we can enthusiasticly collaborate and make interesting videos for everyone to giggle.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="/coin.gif" alt="Support Through Coffee" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Support Through SuperChat</h3>
                        <p>If my content makes you curious, you can support me by providing Superchat in &quot;Your Page&quot;Section, thus contributing to my hustle and growth.</p>
                    </div>
                </div>
                {/* Add more steps as needed */}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Creators</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Direct financial support from your fanbase</li>
                <li className="mb-2">Engage with your fans on a more personal level</li>
                <li className="mb-2">Access to a platform tailored for creative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Directly contribute to the success of your favorite creators</li>
                <li className="mb-2">Exclusive rewards and perks for supporting creators</li>
                <li className="mb-2">Be part of the creative process and connect with creators</li>
                {/* Add more benefits */}
            </ul>

            {/* Additional sections */}
            <h2 className="text-2xl font-semibold mb-4">Benefits of Collaboration</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Unlock new opportunities through collaboration with fellow creators</li>
                <li className="mb-2">Expand your network and reach a wider audience</li>
                <li className="mb-2">Combine skills and resources to create innovative projects</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
                <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
                <li className="mb-2">Participate in discussions and events centered around your interests</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
                <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
                <li className="mb-2">Stay updated on industry trends and best practices</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Recognition and Exposure</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
                <li className="mb-2">Feature in promotional materials and campaigns</li>
                <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>
                {/* Add more benefits */}
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Supportive Community</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Join a community that values creativity, diversity, and inclusivity</li>
                <li className="mb-2">Find encouragement and inspiration from fellow members</li>
                <li className="mb-2">Collaborate on projects and share resources for mutual growth</li>
                {/* Add more benefits */}
            </ul>

        </div>
    );
}

export default About;

export const metadata = {
    title: "About - Cinema is Amar",
}
