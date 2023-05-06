using Rytr;

public async Task<string> GenerateTextAsync()
{
    // Set up the Rytr client
    var client = new RytrClient("<YOUR_API_KEY>", "https://api.rytr.me/v1");

    // Create a new request
    var request = new RytrRequest
    {
        Topic = "Your article topic",
        Tone = "Informal",
        Length = 500
    };

    // Call the GenerateDocumentAsync method to generate the text
    var response = await client.GenerateDocumentAsync(request);

    // Retrieve the generated text from the response
    var generatedText = response.GeneratedDocument;

    // Return the generated text
    return generatedText;
}
