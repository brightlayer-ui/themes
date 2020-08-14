export const deviceData = [
    createData('Lighting - PDU 200', 'Eaton', 'ETN 42.00', 'Pittsburgh, PA', '01.01.2019'),
    createData('UPS 3400', 'Eaton', 'ETN TEST 0.200', 'Cleveland, OH', '01.01.2019'),
    createData('Lighting - PDU 400', 'Ephesus', 'LAB 0.800', 'Pittsburgh, PA', '01.01.2019'),
    createData('UPS 5400', 'Eaton', 'LAB 0.800', 'Pittsburgh, PA', '01.01.2019'),
    createData('Generator 200', 'Eaton', 'ETN TEST 0.200', 'Cleveland, OH', '01.01.2019'),
];

export const alarmsData = [
    { title: 'Cleared', value: 'No' },
    { title: 'Acknowledged', value: 'No' },
    { title: 'Updates', value: 36 },
    { title: 'Optimized', value: 'False' },
    { title: 'Priority', value: 'No' },
    { title: 'Alarm ID', value: 998 },
];

export const locationData = [
    { location: 'Pittsburgh, PA', numDevices: 4 },
    { location: 'Cleveland, OH', numDevices: 2 },
    { location: 'Dublin, Ireland', numDevices: 6 },
    { location: 'Raleigh, NC', numDevices: 3 },
    { location: 'Houston, TX', numDevices: 0 },
];

export const dashboardData = [
    { heroValue: 84, loadValue: 20, battery: 12, temp: 72, voltage: 210, current: 12 },
    { heroValue: 100, loadValue: 33, battery: 52, temp: 60, voltage: 150, current: 18 },
    { heroValue: 72, loadValue: 98, battery: 38, temp: 90, voltage: 36, current: 12 },
    { heroValue: 54, loadValue: 73, battery: 22, temp: 77, voltage: 110, current: 12 },
    { heroValue: 95, loadValue: 25, battery: 98, temp: 68, voltage: 220, current: 6 },
    { heroValue: 70, loadValue: 11, battery: 11, temp: 72, voltage: 180, current: 15 },
    { heroValue: 43, loadValue: 12, battery: 99, temp: 72, voltage: 36, current: 16 },
    { heroValue: 36, loadValue: 76, battery: 73, temp: 74, voltage: 150, current: 15 },
    { heroValue: 92, loadValue: 34, battery: 66, temp: 68, voltage: 180, current: 15 },
];

export const timeRanges = [
    { period: 'Today', data: deviceData.slice(0, 2) },
    { period: 'Past Week', data: deviceData.slice(2, 4) },
    { period: 'Last 30 Days', data: deviceData.slice(4, 6) },
];

function createData(name, manufacturer, networkID, location, dateAdded) {
    return { name, manufacturer, networkID, location, dateAdded };
}
