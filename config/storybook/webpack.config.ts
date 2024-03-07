import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '', 
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    
    if (config.resolve && config.resolve.modules) {
        config.resolve.modules.push(paths.src);
    }

    if (config.resolve && config.resolve.extensions) {
        config.resolve.extensions.push('.ts', '.tsx');
    }

    if (config.module && config.module.rules) {
        // eslint-disable-next-line
        // @ts-ignore
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/i};
            }

            return rule;
        });

        const svgRule: RuleSetRule = {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        };
        config.module.rules.push(svgRule);

        config.module.rules.push(buildCssLoader(true));

        config.plugins?.push(new DefinePlugin({
            __IS_DEV__: true,
        }));
    }

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));
    
    return config;
};