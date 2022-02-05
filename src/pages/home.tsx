import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { InstallButton } from "../install-button";
import { Example, ExampleCode, ExampleDemo } from "../example";
import { StaticExample } from "../examples/static-example";
import staticExampleString from "../examples/static-example?raw";
import { ReactiveExample } from "../examples/reactive-example";
import reactiveExampleString from "../examples/reactive-example?raw";
import { FilterableExample } from "../examples/filterable-example";
import filterableExampleString from "../examples/filterable-example?raw";
import { FilterableObjectsExample } from "../examples/filterable-objects-example";
import filterableObjectsExampleString from "../examples/filterable-objects-example?raw";
import { MultipleExample } from "../examples/multiple-example";
import multipleExampleString from "../examples/multiple-example?raw";
import { MultipleFilterableExample } from "../examples/multiple-filterable-example";
import multipleFilterableExampleString from "../examples/multiple-filterable-example?raw";
import { StylingExample } from "../examples/styling-example";
import stylingExampleString from "../examples/styling-example?raw";
import stylingExampleCSSString from "../examples/styling-example.css?inline";

const stylingExampleStylesheet = stylingExampleCSSString.includes(":#")
  ? stylingExampleCSSString
      .replaceAll("{", " {\n")
      .replaceAll("}", "\n}\n")
      .replaceAll(";", ";\n")
      .replaceAll(":", ": ")
  : stylingExampleCSSString;

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
            <Example title="Styling">
              <ExampleDemo>
                <StylingExample />
              </ExampleDemo>
              <div class="w-full lg:flex-1 lg:max-w-1/2">
                <ExampleCode
                  code={stylingExampleString}
                  class="mb-1 flex-1 !lg:max-w-full"
                />
                <ExampleCode
                  stylesheet={stylingExampleStylesheet}
                  class="flex-1 !lg:max-w-full"
                />
              </div>
            </Example>
            <Example title="Static">
              <ExampleDemo>
                <StaticExample />
              </ExampleDemo>
              <ExampleCode code={staticExampleString} />
            </Example>
            <Example title="Reactive">
              <ExampleDemo>
                <ReactiveExample />
              </ExampleDemo>
              <ExampleCode code={reactiveExampleString} />
            </Example>
            <Example title="Filterable">
              <ExampleDemo>
                <FilterableExample />
              </ExampleDemo>
              <ExampleCode code={filterableExampleString} />
            </Example>
            <Example title="Filterable (Objects)">
              <ExampleDemo>
                <FilterableObjectsExample />
              </ExampleDemo>
              <ExampleCode code={filterableObjectsExampleString} />
            </Example>
            <Example title="Multiple">
              <ExampleDemo>
                <MultipleExample />
              </ExampleDemo>
              <ExampleCode code={multipleExampleString} />
            </Example>
            <Example title="Multiple Filterable">
              <ExampleDemo>
                <MultipleFilterableExample />
              </ExampleDemo>
              <ExampleCode code={multipleFilterableExampleString} />
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
