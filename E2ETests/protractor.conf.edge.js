exports.config = {
    framework: 'jasmine',
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['tests/e2eTestsSpec.js'],
    capabilities: {
        'browserstack.user': 'xxx',
        'browserstack.key': 'xxx',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Edge',
        'browser_version': '13.0',
        'resolution': '1024x768',
        'project': 'adalJs',
        'build': 'adalJsEdgeR'
    },
}