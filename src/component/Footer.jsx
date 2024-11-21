import Link from './foundations/Link';

const Footer = () => {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                    <Link href="/A propos" label="A propos" />
                    <Link href="/Articles" label="Articles" />
                    <Link href="/Projets" label="Projets" />
                    <Link href="/Contact" label="Contact" />
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2024 Thomas Farre. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
