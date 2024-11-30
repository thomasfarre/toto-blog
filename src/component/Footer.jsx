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
                    <Link href="/a-propos" label="À propos de moi" />
                    <Link href="/articles" label="Articles" />
                    <Link href="/projets" label="Projets" />
                    <Link href="/outils" label="Outils" />
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">© 2024 Thomas Farre. All rights reserved.</p>
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
