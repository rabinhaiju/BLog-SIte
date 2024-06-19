import React from 'react';
import { useParams } from 'react-router-dom';
import { Details } from './Data';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = Details.find(item => item.id === parseInt(id));

    if (!project) {
        return <div>Project not found.</div>;
    }

    // Sample blog data with images of newspapers
    const blogs = [
        {
            id: 1,
            title: "The Importance of Responsive Design",
            image: "https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/newspaper/@@images/image.jpeg",
            description: "Learn why responsive design is crucial for modern websites.",
            date: "June 15, 2024",
            author: "John Doe"
        },
        {
            id: 2,
            title: "Accessibility in Web Design",
            image: "https://t4.ftcdn.net/jpg/06/15/39/73/360_F_615397357_nG7ZK98NnvHYPzJRMYLvMw2nazNNCPAO.jpg",
            description: "Key principles and practices for creating accessible websites.",
            date: "June 17, 2024",
            author: "Jane Smith"
        },
        {
            id: 3,
            title: "Testing Strategies for Frontend Development",
            image: "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg",
            description: "Effective testing approaches to ensure robust frontend applications.",
            date: "June 19, 2024",
            author: "Chris Johnson"
        }
    ];

    return (
        <div className='w-[1200px] m-auto flex flex-col items-center my-10'>
            <h2 className='text-3xl font-bold'>{project.title}</h2>
            <img className='w-[300px] h-[500px] object-cover border-2 border-black mt-4' src={project.image} alt={project.title} />
            <p className='mt-4'>{project.description}</p>
            <p className='mt-2 text-xl font-semibold'>Level: {project.level}</p>

            <div className="w-[1200px] m-auto mt-10">
                <h3 className="text-3xl font-bold mb-5">Related Blogs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => (
                        <div key={blog.id} className="bg-white shadow-md p-6 rounded-lg">
                            <img className="w-full h-40 object-cover mb-4 rounded-lg" src={blog.image} alt={blog.title} />
                            <h4 className="text-xl font-semibold mb-2">{blog.title}</h4>
                            <p className="text-gray-700 mb-2">{blog.description}</p>
                            <p className="text-sm text-gray-500">{blog.date} | By {blog.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
