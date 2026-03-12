import "./ProfileCard.css";
export default function ProfileCard({ name, role, skills, isAvailable, bio }) {
  return (
    <div className={`card ${isAvailable ? "available" : "unavailable"}`}>
      <div
        className="availability-dot"
        title={isAvailable ? "Ready to work" : "Unavailable"}
      >
        <span className={isAvailable ? "dot green" : "dot red"}></span>
      </div>
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <div className="skill-section">
        <h3>Skills</h3>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
