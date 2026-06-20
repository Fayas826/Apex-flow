import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Integrations from "./pages/Integrations";
import Customers from "./pages/Customers";
import Careers from "./pages/Careers";
import Security from "./pages/Security";
import DashboardLayout from "./components/DashboardLayout";
import DashboardView from "./components/DashboardView";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard">
        <DashboardLayout>
          <DashboardView />
        </DashboardLayout>
      </Route>
      <Route path="/some-path">
        <DashboardLayout>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Settings & Collaborators</h2>
              <p className="text-muted-foreground">Manage your workspace members and team access levels.</p>
            </div>
            <div className="border border-dashed rounded-lg h-[400px] flex flex-col items-center justify-center gap-2 text-muted-foreground bg-muted/20">
              <span className="font-semibold text-lg">Settings & Collaborator Panel</span>
              <span>This is a sandbox placeholder for Page 2.</span>
            </div>
          </div>
        </DashboardLayout>
      </Route>
      <Route path="/features" component={Features} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/customers" component={Customers} />
      <Route path="/careers" component={Careers} />
      <Route path="/security" component={Security} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
