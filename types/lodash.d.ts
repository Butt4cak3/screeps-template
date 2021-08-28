/**
 * This file is tells TypeScript that _ (lodash) is globally available.
 */

import _ from "lodash";

declare global {
  const _: typeof _;
}
