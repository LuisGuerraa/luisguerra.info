import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.png';
import avatarBW from 'public/avatar.png';

export default function About() {
  return (
    <Container title="About – Luís Guerra">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Socials</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/LuisGuerra3548">LuisGuerra3548</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/LuisGuerraa">@LuisGuerraa</a>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/luisguerra35/">
              luisguerra35
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Security & Sofware Engineer</p>
          <p>
            Hey, I'm Luís. I'm the Sofware and Security Engineer
          </p>
          <h3>Carreer</h3>
          <h3>Education</h3>
          <p>
            Graduated from  <a href="https://www.isel.pt/">Insituto Superior de Engenharia de Lisboa</a> (ISEL) with a B.S. in
            Computer Science and Engineering.
            Additionally, I took a Master's degree also at <a href="https://www.isel.pt/">Insituto Superior de Engenharia de Lisboa</a> (ISEL)
            in Computer Science and Engineering with focus on computer security, distributed systems and networks.
          </p>
        </div>
      </div>
    </Container>
  );
}
