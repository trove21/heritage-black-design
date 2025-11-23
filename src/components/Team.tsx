const teamMembers = [
  { name: "James Anderson", title: "Founder & CEO" },
  { name: "Sarah Mitchell", title: "Creative Director" },
  { name: "Michael Chen", title: "Lead Architect" },
  { name: "Emily Roberts", title: "Project Manager" },
  { name: "David Thompson", title: "Senior Consultant" },
];

const Team = () => {
  return (
    <section id="team" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <p className="section-label text-center mb-4">OUR PEOPLE</p>
        <h2 className="text-center mb-8">Meet the Team</h2>
        <p className="text-body-large text-center max-w-3xl mx-auto mb-20 opacity-90">
          Our dedicated professionals bring decades of combined experience and unwavering commitment to excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Photo Placeholder */}
              <div className="relative aspect-square mb-4 overflow-hidden rounded-sm bg-secondary border-2 border-border group-hover:border-primary transition-all duration-400">
                <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-400">
                  <span className="text-6xl font-heading opacity-30">{member.name.charAt(0)}</span>
                </div>
              </div>
              
              {/* Name & Title */}
              <h6 className="font-semibold mb-1">{member.name}</h6>
              <p className="text-body-small opacity-70">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
