// readme.ts
// 2511 placeholder bookmark ~
// src sha/index: 1912cd7465ce089aeefe8c5413e17dc67f0650b3

// This TypeScript readme exports a small set of constants and templates:
// - A 2511 placeholder bookmark
// - The sha indexing the src directory (from the provided commit OID)
// - A concise Rust _init_ package template (Cargo.toml + src/lib.rs)
// - A decorated Next.js env object feature (nextEnv) for easy consumption

export const BOOKMARK: string = '2511 placeholder bookmark ~';
export const SRC_SHA: string = '1912cd7465ce089aeefe8c5413e17dc67f0650b3';

// Concise Rust _init_ package template (as a string) -- drop into a new Rust crate
export const RUST_INIT_PACKAGE: string = `# Cargo.toml
[package]
name = "init"
version = "0.1.0"
edition = "2021"

[lib]
name = "init"
path = "src/lib.rs"

[dependencies]
# Add dependencies here

---

# src/lib.rs
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

/// Initialize the package. Minimal, concise implementation.
pub fn init() -> &'static str {
    "init: ok"
}
`;

// next.env decoration: a small helper exposing Next.js environment-like object
export type NextEnv = {
  NEXT_PUBLIC_APP_NAME?: string;
  NODE_ENV?: string;
  SRC_SHA?: string;
  [key: string]: string | undefined;
};

export const nextEnv: NextEnv = {
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'verbose-octo',
  NODE_ENV: process.env.NODE_ENV || 'development',
  SRC_SHA: SRC_SHA,
};

// Helper to merge runtime env (if any) and the static nextEnv
export function getNextEnv(overrides: Partial<NextEnv> = {}): NextEnv {
  return Object.freeze({ ...nextEnv, ...overrides });
}

// Export a concise README summary for humans
export const README_SUMMARY: string = `Readme (TS)

- Bookmark: ${BOOKMARK}
- Source SHA index: ${SRC_SHA}

Included templates:
- RUST_INIT_PACKAGE: minimal Cargo.toml + src/lib.rs with an init() fn
- nextEnv: decorated object exposing NEXT_PUBLIC_APP_NAME, NODE_ENV, and SRC_SHA

Usage:
import { README_SUMMARY, RUST_INIT_PACKAGE, getNextEnv } from './readme';
`;

// End of file
