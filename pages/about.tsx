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
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/LuisGuerra3548">https://twitter.com/LuisGuerra3548b</a>
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
          <h3>Long, 3rd Person</h3>
          <p>
            Tiago Pereira is the Sofware Engineer at{' '}
            <a href="http://nipo.com/">NIPO</a>, where he helps developers
            build a faster web and leads the Next.js community. He leads the
            community for the React framework Next.js and is an open-source
            contributor. An educator, writer, and speaker, Tiago has created
            courses on React, Next.js, and web development.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Tiago. I'm the Sofware Engineer at{' '}
            <a href="https://nipo.com/">NIPO</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I'm passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Tiago Pereira is the Sofware Engineer at{' '}
            <a href="http://nipo.com/">NIPO</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Tiago. I'm the Sofware Engineer at{' '}
            <a href="https://nipo.com/">NIPO</a>, where my team helps
            developers build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Tiago Pereira graduated from Iowa State University with a B.S. in
            Computer Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Tiago Pereira headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Tiago Pereira headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
