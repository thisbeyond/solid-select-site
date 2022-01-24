import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { Example, ExampleCode, ExampleDemo } from "../example";
import { SelectExample } from "../examples/select-example";
import selectExampleString from "../examples/select-example?raw";
import { InstallButton } from "../install-button";

const Home = () => {
  return (
    <div class="leading-normal tracking-normal text-white ">
      <Header />

      <section id="features" class="bg-white border-b py-8">
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Features</SectionHeading>

          <div class="grid md:grid-cols-2 auto-rows-fr gap-8">
            <FeatureCard title="Built for Solid">
              Leverages fine-grained reactivity primitives for coordination.
            </FeatureCard>
            <FeatureCard title="Flexible">
              Built to support a wide range of cases, from single selects to
              multi-select autocomplete lists.
            </FeatureCard>
            <FeatureCard title="Extendable">
              Use the pre-fabricated components or build your own from the core
              primitives.
            </FeatureCard>
            <FeatureCard title="Zero dependencies">
              Just pair with Solid and good to go.
            </FeatureCard>
          </div>
        </div>
      </section>
      <section id="examples" class="bg-gray-100 py-8">
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Examples</SectionHeading>
          <div class="space-y-14">
            <Example title="Basic select">
              <ExampleDemo>
                <SelectExample />
              </ExampleDemo>
              <ExampleCode code={selectExampleString} />
            </Example>
          </div>
        </div>
      </section>
      <footer class="bg-gradient">
        <WaveFooter />
        <section id="get-it" class="container mx-auto text-center p-6 pb-12">
          <SectionHeading variant="light">Get it</SectionHeading>
          <h3 class="mb-4 text-2xl leading-tight">
            Install with NPM (or check out the code on{" "}
            <a
              class="hover:underline text-orange-200"
              href="https://github.com/thisbeyond/solid-select"
            >
              Github
            </a>
            )
          </h3>
          <InstallButton />
        </section>
      </footer>
    </div>
  );
};

export default Home;
