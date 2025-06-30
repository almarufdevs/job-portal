

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              
                <div>
                    <h1 className="text-2xl font-bold mb-2">
                        Volunteer<span className="text-green-400">Hub</span>
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Connecting hands to hearts — Find and post volunteer opportunities easily.
                    </p>
                </div>

                
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="/" className="hover:text-white">🏠 Home</a></li>
                        <li><a href="/posts" className="hover:text-white">📄 Volunteer Posts</a></li>
                        <li><a href="/add-post" className="hover:text-white">➕ Add Post</a></li>
                        <li><a href="/contact" className="hover:text-white">📞 Contact</a></li>
                    </ul>
                </div>

               
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4 text-gray-300 text-xl">
                       
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12.073C22 6.49 17.522 2 12 2S2 6.49 2 12.073c0 5.004 3.657 9.147 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.22 22 17.077 22 12.073z"/>
                            </svg>
                        </a>
                       
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.346 3.608 1.32.975.975 1.259 2.242 1.32 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.346 2.633-1.32 3.608-.975.975-2.242 1.259-3.608 1.32-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.346-3.608-1.32-.975-.975-1.259-2.242-1.32-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.346-2.633 1.32-3.608.975-.975 2.242-1.259 3.608-1.32C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.741 0 8.332.014 7.052.072 5.662.132 4.234.42 3.068 1.586 1.902 2.752 1.614 4.18 1.554 5.57.996 6.85.98 7.259.98 12c0 4.741.016 5.15.074 6.43.06 1.39.348 2.818 1.514 3.984 1.166 1.166 2.594 1.454 3.984 1.514 1.28.058 1.689.074 6.43.074s5.15-.016 6.43-.074c1.39-.06 2.818-.348 3.984-1.514 1.166-1.166 1.454-2.594 1.514-3.984.058-1.28.074-1.689.074-6.43s-.016-5.15-.074-6.43c-.06-1.39-.348-2.818-1.514-3.984C20.766.42 19.338.132 17.948.072 16.668.014 16.259 0 12 0z"/>
                                <circle cx="12" cy="12" r="3.5"/>
                                <circle cx="18.5" cy="5.5" r="1.5"/>
                            </svg>
                        </a>
                       
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a2.97 2.97 0 0 0-2.089-2.103C19.778 3.5 12 3.5 12 3.5s-7.778 0-9.409.583A2.97 2.97 0 0 0 .502 6.186 31.55 31.55 0 0 0 0 12c.002 1.929.183 3.813.502 5.814a2.97 2.97 0 0 0 2.089 2.103C4.222 20.5 12 20.5 12 20.5s7.778 0 9.409-.583a2.97 2.97 0 0 0 2.089-2.103c.319-2.001.5-3.885.502-5.814a31.55 31.55 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                            </svg>
                        </a>
                        
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.833 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.242 2.874.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.623-5.48 5.92.43.372.823 1.103.823 2.222 0 1.604-.015 2.898-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
                &copy; {currentYear} VolunteerHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
