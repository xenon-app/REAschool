import React from 'react';
import { Github, Twitter, Linkedin, GraduationCap, Mail } from 'lucide-react';

const facultyData = [
  {
    name: "Dr. Arjan Singh",
    role: "Director",
    qualification: "Ph.D. in Educational Leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Over 25 years of experience in global education systems and institutional growth.",
  },
  {
    name: "Sarah Chen",
    role: "Principal",
    qualification: "M.Ed. Curriculum Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Dedicated to fostering a creative and disciplined learning environment for every student.",
  },
  {
    name: "David Miller",
    role: "Senior Math Faculty",
    qualification: "M.Sc. Applied Mathematics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in competitive exam coaching and making complex logic easy to grasp.",
  },
  {
    name: "Priya Sharma",
    role: "Science HOD",
    qualification: "M.Sc. Physics, B.Ed.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400",
    bio: "Focuses on experimental learning and bringing textbook concepts to life in the lab.",
  },
  {
    name: "Robert Wilson",
    role: "English Literature",
    qualification: "M.A. English Philology",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Passionate about classic literature and developing student communication skills.",
  },
  {
    name: "Aisha Khan",
    role: "Computer Science",
    qualification: "B.Tech CSE, Google Certified",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=400",
    bio: "Leading our digital literacy programs and introducing students to modern AI and coding.",
  }
];

const FacultyCard = ({ member }: { member: any }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl border border-slate-100 flex flex-col h-full">
    <div className="relative h-72 w-full overflow-hidden rounded-xl">
      <img 
        src={member.image} 
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Animation: Hi bubble shows on hover */}
      <div className="absolute top-4 left-4 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <div className="rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-blue-600 shadow-lg">
           Hi, I am {member.name.split(' ')[0]}! 👋
        </div>
      </div>
    </div>
    
    <div className="mt-6 flex-1 flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <GraduationCap className="h-5 w-5 text-blue-500" />
      </div>
      <p className="text-sm font-medium uppercase tracking-wider text-blue-600">{member.role}</p>
      <p className="text-xs font-semibold text-slate-500">{member.qualification}</p>
      <p className="text-sm text-slate-600 leading-relaxed flex-1">{member.bio}</p>
    </div>

    <div className="mt-6 flex gap-4 border-t border-slate-50 pt-4">
      <button className="rounded-full p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
        <Mail size={18} />
      </button>
      <button className="rounded-full p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
        <Linkedin size={18} />
      </button>
    </div>
  </div>
);

export default function FacultySection() {
  return (
    <section id="faculty" className="bg-slate-50 py-24 px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Meet Our <span className="text-orange-500">Expert Faculty</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A team of dedicated professionals committed to excellence in education and student development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facultyData.map((member, index) => (
            <FacultyCard key={index} member={member} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg active:scale-95">
            Contact Our Staff
          </button>
        </div>
      </div>
    </section>
  );
}
