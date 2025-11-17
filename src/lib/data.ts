import "server-only";
import { User } from "./definitions";

export async function getReports(): Promise<any[]> {
  // Placeholder for fetching reports
  return [];
}

export async function getUser(): Promise<User> {
  // Placeholder for fetching user data
  return { name: "John Doe" };
}
