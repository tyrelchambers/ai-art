import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, ReactLocation, Router } from "react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider";
import { routes } from "./routes";

const location = new ReactLocation();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <MantineProvider>
          <ModalsProvider>
            <AuthProvider>
              <NotificationsProvider>
                <Outlet />
              </NotificationsProvider>
            </AuthProvider>
          </ModalsProvider>
        </MantineProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
