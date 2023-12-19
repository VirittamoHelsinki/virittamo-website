import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const components = {
  IFrame({ url }: { url: string }) {
    return (
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <iframe
          src={url}
          title="YouTube video player"
          frame-border="0"
          loading="lazy"
          className="absolute left-0 top-0 aspect-video h-full w-full border-0"
        ></iframe>
      </div>
    );
  },
};

const post1 = `# Kauppa Televiissio Suomessa  on 100 miljoonaa viritamon softa
ruokakauppaa per neliometri, joka tarkoittaa modernia yhteiso
kaupunginlaidalla.  Suomessa  on 100 miljoonaa viritamon softa
ruokakauppaa per neliometri, joka tarkoittaa modernia yhteiso
kaupunginlaidalla. Suomessa  on 100 miljoonaa viritamon softa
ruokakauppaa per neliometri, joka tarkoittaa modernia yhteiso
kaupunginlaidalla.  Suomessa  on 100 miljoonaa viritamon softa
ruokakauppaa per neliometri, joka tarkoittaa modernia yhteiso
kaupunginlaidalla. ### Talousmarkkinatalo Uusin hullutus on taloudessa
saatava kaupamarkkinaturva myonetaan jokaiselle jolla on kolme
ruisleipa palasta. Uusin hullutus on taloudessa saatava
kaupamarkkinaturva myonetaan jokaiselle jolla on kolme ruisleipa
palasta. Uusin hullutus on taloudessa saatava kaupamarkkinaturva
myonetaan jokaiselle jolla on kolme ruisleipa palasta. Uusin hullutus
on taloudessa saatava kaupamarkkinaturva myonetaan jokaiselle jolla on
kolme ruisleipa palasta. Uusin hullutus on taloudessa saatava
kaupamarkkinaturva myonetaan jokaiselle jolla on kolme ruisleipa
palasta. Suomessa  on 100 miljoonaa viritamon softa ruokakauppaa per
neliometri, joka tarkoittaa modernia yhteiso kaupunginlaidalla.
Suomessa  on 100 miljoonaa viritamon softa ruokakauppaa per
neliometri, joka tarkoittaa modernia yhteiso kaupunginlaidalla.
Suomessa  on 100 miljoonaa viritamon softa ruokakauppaa per
neliometri, joka tarkoittaa modernia yhteiso kaupunginlaidalla.
Suomessa  on 100 miljoonaa viritamon softa ruokakauppaa per
neliometri, joka tarkoittaa modernia yhteiso kaupunginlaidalla.
![local video](http://localhost:3000/mock-video.mp4)
## Hello world on Suomessa Erittain Suosittu Nimi Tarkaavaisuu on
eripuran kolmas suunnitelma mika on hyvin yleista nyky maailmassa
![brainstorm](https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)
`;

const post2 = `# Talousmarkkinatalo Uusin hullutus on taloudessa saatava
Kauppa Televiissio Suomessa  on 100 miljoonaa viritamon softa
ruokakauppaa per neliometri, joka tarkoittaa modernia yhteiso
kaupunginlaidalla.  Suomessa  on 100 miljoonaa viritamon softa
ruokakauppaa per neliometri, joka tarkoittaa modernia yhteiso
## Hello world on Suomessa Erittain Suosittu Nimi Tarkaavaisuu on
eripuran kolmas suunnitelma mika on hyvin yleista nyky maailmassa
suomessa on 100 miljoonaa viritamon softa ruokakauppaa per
neliometri, joka tarkoittaa modernia yhteiso kaupunginlaidalla.
### Talousmarkkinatalo Uusin hullutus on taloudessa saatava
<IFrame 
  url="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=8LhV0pA3z-FES-aM" 
 />
  `;

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center px-[100px]">
      <article className="flex max-w-[85ch] flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
            Post Title {params.slug}
          </h1>
          <p className="text-[1.875rem]">Post description</p>
          {params.slug === "1" ? (
            <Image
              className="h-[400px] rounded-xl object-cover"
              src="/companies.png"
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
          ) : (
            <video
              controls
              src="http://localhost:3000/mock-video.mp4"
              className="h-[400px] rounded-xl object-cover"
              width={2000}
              height={2000}
            />
          )}
        </header>
        <main className="prose-2xl">
          <Suspense fallback={<Loader2 className="animate-spin" />}>
            <MDXRemote
              source={params.slug === "1" ? post1 : post2}
              components={components}
            />
          </Suspense>
        </main>
      </article>
    </main>
  );
}
