import ProfileCard from "./components/ProfileCard";

const profiles = [
  {
    id: 1,
    name: "Cyph Dev",
    role: "Linux Enthusiast",
    skills: ["React", "Python", "Fish"],
    isAvailable: true,
    bio: "Builds Hyprland rices, custom Fish functions, and full-stack projects. Believes dotfiles are art. Currently studying DSA patterns for SDE interviews.",
  },
  {
    id: 2,
    name: "Aria Chen",
    role: "Frontend Engineer",
    skills: ["TypeScript", "Figma", "CSS"],
    isAvailable: false,
    bio: "Obsessed with micro-interactions and design systems. 4 years at startups, now freelancing. Spends weekends contributing to open-source UI libraries.",
  },
  {
    id: 3,
    name: "Momo Hirai",
    role: "Backend & DevOps",
    skills: ["Go", "Postgres", "Docker"],
    isAvailable: true,
    bio: "Kubernetes wrangler and Go enthusiast. Previously at fintech, now building infra tooling in the open. Likes his clusters like his coffee — reliable.",
  },
];

export default function App() {
  return (
    <div className="card-container">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
}
