export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "Docker",
    "AWS",
    "Tailwind",
    "AI"
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {skills.map(skill => (
        <span
          key={skill}
          className="px-5 py-2 rounded-xl bg-black text-white"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}            