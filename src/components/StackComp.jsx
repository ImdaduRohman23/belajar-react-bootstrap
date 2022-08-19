import Stack from 'react-bootstrap/Stack';

function StackComp() {
    return (
        <Stack gap={4}>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
        </Stack>
    );
}

export default StackComp;