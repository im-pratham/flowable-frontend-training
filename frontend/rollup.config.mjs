import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import resolve from "rollup-plugin-node-resolve";
import sourceMaps from 'rollup-plugin-sourcemaps';

const production = process.env.BUILD === "production";
const suiteActive = process.env.BUILDTYPE === "suite"

const input = !suiteActive ? "src/form-components/formComponents.tsx" : "src/form-components/suite.tsx"
const outputJs = !suiteActive ? "./dist/custom.js" : "./dist-suite/index.js"
const outputCss = !suiteActive ? "./dist/custom.css" : "./dist-suite/index.css"

export default {
    input: input,
    output: {
        name: "flowable.externals",
        file: outputJs,
        format: "umd",
        sourcemap: true,
        globals: {
            react: "flowable.React",
            "react-dom": "flowable.ReactDOM",
            "react-router": "flowable.ReactRouter",
            "@flowable/forms": "flowable.Forms",
            "@flowable/forms-work": "flowable.FormsWork",
            "@flowable/work": "flowable.Components",
            "date-fns": "flowable.dateFns",
        },
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/@mui/utils/node_modules/react-is/index.js': ['Memo', 'ForwardRef', 'isFragment'],
                "node_modules/react/jsx-runtime.js": ['jsx', "jsxs"],
                "node_modules/@mui/material/node_modules/react-is/index.js": ['isFragment']

            }
        }),
        typescript(),
        // production && terser(),
        scss({
            output: outputCss,
            options: {outputStyle: "compressed"}
        }),
        sourceMaps()
    ],
    external: [
        "react",
        "react-dom",
        "react-router",
        "@flowable/forms",
        "@flowable/work",
        "@flowable/work-scripts",
        "@flowable/forms-work",
    ],
};
