export default async function ConceptPage({ params, }: { params: Promise<{ featureId: string; conceptId: string }> }) {
    const { featureId, conceptId } = await params;
    return (
        <>
            <div>Feature ID: {featureId}</div>
            <div>Concept ID: {conceptId}</div>
        </>
    )
}