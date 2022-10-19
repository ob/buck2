/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use cli_proto::StatusResponse;

#[cfg(all(unix, not(fbcode_build), not(buck_oss_build)))]
pub fn jemalloc_stats(response: &mut StatusResponse) {
    use jemalloc_ctl::epoch;
    use jemalloc_ctl::stats;

    fn set<T>(to: &mut Option<u64>, from: Result<usize, T>) {
        if let Ok(from) = from {
            *to = Some(from as u64);
        }
    }

    // Many statistics are cached and only updated when the epoch is advanced.
    if epoch::advance().is_err() {
        return;
    }
    set(&mut response.bytes_allocated, stats::allocated::read());
    set(&mut response.bytes_resident, stats::resident::read());
    set(&mut response.bytes_retained, stats::retained::read());
}

#[cfg(not(all(unix, not(fbcode_build), not(buck_oss_build))))]
pub fn jemalloc_stats(_response: &mut StatusResponse) {}

#[cfg(test)]
mod tests {
    use crate::jemalloc_stats::jemalloc_stats;

    #[test]
    fn test_jemalloc_stats() {
        if cfg!(unix) && !cfg!(fbcode_build) {
            let mut response = cli_proto::StatusResponse::default();
            jemalloc_stats(&mut response);
            assert!(response.bytes_allocated.is_some());
            assert!(response.bytes_resident.is_some());
            assert!(response.bytes_retained.is_some());
        }
    }
}
