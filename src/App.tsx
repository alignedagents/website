import React from "react";
import {
  Network,
  Mail,
  Github,
  Brain,
  Shield,
  Sparkles,
  ArrowDown,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Network className="h-6 w-6 text-gray-700" />
              <span className="font-semibold text-xl text-gray-900">
                Aligned Agents Research
              </span>
            </div>
            <div className="flex gap-8">
              <a href="#research" className="text-gray-600 hover:text-gray-900">
                Research
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Automated Design and Alignment of Multi-Agent Systems
          </h1>
          <p className="text-lg text-gray-600">
            Research initiative focused on developing safe and aligned
            multi-agent systems through automated methods.
          </p>
        </div>
      </header>

      {/* Research */}
      <section id="research" className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Research Roadmap
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Automated Design of Multi-Agent Systems
                  </h3>
                  <p className="text-gray-600">
                    Automated creation and improvement of multi-agent systems,
                    focusing on scalable architectures and robust interaction
                    patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-gray-400" />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Coherent Extrapolated Volition
                  </h3>
                  <p className="text-gray-600">
                    Simplified implementation of Coherent Extrapolated Volition
                    to align agents and outputs with human values and
                    intentions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-gray-400" />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. AI Safety & Social Good
                  </h3>
                  <p className="text-gray-600">
                    Automated AI Safety Research combined with AI for Good
                    initiatives, focusing on automated creation of social good
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact</h2>
          <p className="text-gray-600 mb-8">
            We welcome collaboration with researchers and institutions
            interested in AI safety and multi-agent systems.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:ram@alignedagents.org"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <Mail className="h-5 w-5" />
              ram@alignedagents.org
            </a>
            <a
              href="https://github.com/alignedagents"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            © 2025 AlignedAgents Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
